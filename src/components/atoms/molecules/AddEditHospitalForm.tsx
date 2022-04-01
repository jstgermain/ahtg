import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

interface Props {
  hospital?:
    | {
        id: Number;
        name: string;
        logo: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        phone: string;
      }
    | undefined;
}

interface Values {
  phone: string;
  zip: string;
}

const AddEditHospitalForm = (props: Props) => {
  const { hospital } = props;

  return (
    <Formik
      initialValues={{
        name: hospital?.name || '',
        address: hospital?.address || '',
        city: hospital?.city || '',
        state: hospital?.state || '',
        zip: hospital?.zip || '',
        phone: hospital?.phone || '',
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
                disableElevation
              >
                {!hospital ? 'Save Hospital' : 'Update Hospital'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddEditHospitalForm;
