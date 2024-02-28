import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RelatedItems from '../../components/client/RelatedItems';
import { useDispatch, useSelector } from 'react-redux';
import { viewItem, relatedItems } from '../../redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClientLayout from '../../layouts/ClientLayout';
import AddCart from '../../components/client/AddCart';
import { useHistory } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 5,
    marginRight: 10,
  },
  links: {
    textDecoration: 'none !important',
    color: 'inherit',
    padding: 2,
  },
  main: {
    backgroundColor: '#fff',
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#fff',
    marginBottom: 40,
    borderRadius: '10px',
  },
  card: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
    padding: 5,
  },
  cardContent: {
    flexGrow: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  spin: {
    position: 'relative',
    top: '50%',
    left: '45%',
    boxSizing: 'border-box',
    margin: 'auto',
    width: '100px !important',
    height: '100px !important',
  },
}));

const ViewItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const [dayNumber, setDayNumber] = useState(1);
  const bookedItems = JSON.parse(localStorage.getItem('orderSummary'));
  console.log('::::::::::::::::::::Order init:', bookedItems);
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemDetails = useSelector((state) => state.supplier.supplier);
  const related = useSelector((state) => state.item.relatedItems);
  // const metadata = useSelector(state => state.item.relatedItems);
  // const cont = useSelector(state => state.item.relatedItems);

  const dispatch = useDispatch();

  const [orderSummary, setOrderSummary] = useState(
    bookedItems !== null ? bookedItems : [],
  );

  const handleToggleModal = (item) => {
    setSubmitted(false);
    setOpen(!open);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSubmitted(false);
    setOpen(false);
  };

  const openCartRoute = () => {
    // history.push('/cart');
    const timerId = setTimeout(() => {
      history.push('/cart');
    }, 1000);

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timerId);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack(false);
  };
  const handleAddItemCart = (e, item, itemNumber) => {
    const { id, itemName, itemPrice } = item;
    const orderItem = {
      id,
      itemName,
      itemPrice: itemPrice * 1,
      itemNumber: itemNumber * 1,
    };
    const ordered = orderSummary.findIndex((order) => order.id === id);
    let updatedOrder = [...orderSummary];

    if (ordered >= 0) {
      updatedOrder[ordered] = orderItem;
    } else updatedOrder = [...orderSummary, orderItem];

    // setOpen(false);
    // setSnack(true);
    setOrderSummary(updatedOrder);
    localStorage.setItem('orderSummary', JSON.stringify(updatedOrder));
    const finalOrder = JSON.parse(localStorage.getItem('orderSummary'));
    const totArray = finalOrder.map(
      (order) => order.itemPrice * order.itemNumber,
    );
    const total = totArray.reduce((x, y) => x + y, 0);

    localStorage.setItem('totalPrice', total);
    setOpen(false);
    setSnack(true);
    openCartRoute();
  };

  useEffect(() => {
    const lastPath = window.location.pathname;
    const id = lastPath.split('/');
    dispatch(viewItem(id[2]));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(relatedItems(itemDetails.category));
  // }, [dispatch, itemDetails.category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ClientLayout>
      {itemDetails.id ? (
        <>
          <main key={itemDetails.id} container className={classes.main}>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={snack}
              message='I love snacks'
              autoHideDuration={3000}
              onClose={handleCloseSnack}
              style={{ marginTop: 80 }}
            >
              <Alert onClose={handleCloseSnack} severity='success'>
                Item added on cart
              </Alert>
            </Snackbar>
            <Box style={{ padding: 15, marginLeft: 30 }}>
              <Breadcrumbs aria-label='breadcrumb'>
                <Link color='inherit' href='/'>
                  Home
                </Link>
                <Link
                  color='inherit'
                  href={`/category/${itemDetails.category}`}
                >
                  {itemDetails.category}
                </Link>
                <Link
                  color='textPrimary'
                  href={`/view/${itemDetails.id}`}
                  aria-current='page'
                >
                  {itemDetails.itemName}
                </Link>
              </Breadcrumbs>
            </Box>
            <Container item className={classes.cardGrid} maxWidth='lg'>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <Card className={classes.card} elevation={1}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={itemDetails.itemImage}
                      title={itemDetails.itemName}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Card className={classes.card} elevation={0}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        component='h2'
                        variant='h4'
                        align='left'
                        color='textPrimary'
                      >
                        {itemDetails.itemName}
                      </Typography>

                      <CardHeader
                        avatar={<VerifiedUserIcon color='primary' />}
                        subheader={`From ${itemDetails.owner.organization}`}
                        title={`${itemDetails.itemPrice * dayNumber} RWF`}
                      />
                      {/* <AddCart
                        addItemCart1={handleAddItemCart}
                        selected1={itemDetails}
                        checkSubmitted1={submitted}
                      /> */}
                      <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          type='number'
                          id='dayNumber'
                          label='Day'
                          name='dayNumber'
                          defaultValue={'10'}
                          helperText={
                            submitted && !dayNumber
                              ? 'please add Number of days you want'
                              : null
                          }
                          value={dayNumber}
                          error={submitted && !dayNumber ? 'is-invalid' : null}
                          onChange={(e) => setDayNumber(e.target.value)}
                          autoComplete='dayNumber'
                          autoFocus
                        />
                        <br />
                        <Button
                          type='submit'
                          variant='contained'
                          color='primary'
                          size='medium'
                          style={{ width: '40%' }}
                          className={classes.submit}
                          onClick={(e) =>
                            handleAddItemCart(e, itemDetails, dayNumber)
                          }
                          // startIcon={<AddShoppingCartIcon />}
                        >
                          Book now
                        </Button>
                        {/* <Link href='/cart' variant='body2' className={classes.links}>
				<Button
					variant='contained'
					color='secondary'
					size='medium'
					style={{ width: '33%' }}
					className={classes.submit}
				>
					Buy Now
				</Button>
			</Link> */}
                      </form>
                      <Divider />
                      <Typography
                        component='h3'
                        variant='h6'
                        align='left'
                        color='textPrimary'
                      >
                        Product description
                      </Typography>
                      <br />
                      <Typography
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        {itemDetails.itemDescription}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </main>
          {/* Related items component --------------------------------------- */}
          {/* <RelatedItems
            items={related ? related.relatedItems : null}
            addItemCart={handleAddItemCart}
            setDialog={open}
            openDialog={handleToggleModal}
            closeDialog={handleClose}
            selected={selectedItem}
            checkSubmitted={submitted}
          /> */}
        </>
      ) : (
        <div style={{ margin: 'auto', width: '70vw', height: '70vh' }}>
          <CircularProgress className={classes.spin} />
        </div>
      )}
    </ClientLayout>
  );
};

export default ViewItem;
