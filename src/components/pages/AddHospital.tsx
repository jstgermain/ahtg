import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinearProgress from '@mui/material/LinearProgress';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { WrapWithLink } from '../../hoc';
import Paper from '@mui/material/Paper';
import Blue from '../../constants/colors/Blue';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';

interface Values {
  phone: string;
  zip: string;
}

const EditHospital = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ backgroundColor: Blue[50], p: 2 }}>
            <Breadcrumbs
              aria-label='breadcrumb'
              separator={<NavigateNextIcon fontSize='small' />}
            >
              <WrapWithLink underline='hover' color='secondary' link='/'>
                Home
              </WrapWithLink>
              <Typography color='secondary.light'>Add Hospital</Typography>
            </Breadcrumbs>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h1'>Add Hospital</Typography>
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={{
              phone: '',
              zip: '',
            }}
            validate={(values) => {
              const errors: Partial<Values> = {};

              if (
                !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
                  values.phone
                )
              ) {
                errors.phone = 'Invalid phone';
              } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.zip)) {
                errors.zip = 'Invalid postal code';
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Grid
                  container
                  spacing={2}
                  maxWidth='sm'
                  justifyContent='center'
                  sx={{
                    mb: 3,
                  }}
                >
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='name'
                      type='text'
                      label='Hospital Name'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='address'
                      type='text'
                      label='Address'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='city'
                      type='text'
                      label='City'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='state'
                      type='text'
                      label='State'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='zip'
                      type='text'
                      label='Postal Code'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      component={TextField}
                      name='phone'
                      type='tel'
                      label='Phone Number'
                    />
                  </Grid>

                  {isSubmitting && <LinearProgress />}
                  <Grid item xs={12}>
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                      onClick={submitForm}
                      size='large'
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default EditHospital;
