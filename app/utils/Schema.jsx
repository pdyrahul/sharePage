import * as Yup from 'yup';

const validationSchema = Yup.object({
  category: Yup.string().required('Category is required'),
  ethnicity: Yup.string().required('Ethnicity is required'),
  eventTitle: Yup.string()
    .max(60, 'Event Title must be at most 60 characters')
    .required('Event Title is required'),
  event: Yup.string()
    .max(100, 'Catchy phrase must be at most 100 characters')
    .required('Catchy phrase is required'),
  // description: Yup.string().required('Event description is required'),
  // privacy: Yup.string().required('Return policy is required'),
  // country: Yup.string().required('Country is required'),
  // state: Yup.string().required('State is required'),
  // city: Yup.string().required('City is required'),
  address: Yup.string().required('Event Address is required'),
  place: Yup.string().required('Name of Place is required'),
  ticketLinkType: Yup.string().when('eventType', {
    is: (value) => value === 'Paid',
    then: (schema) => schema.required('Link Type Required'),
    otherwise: (schema) => schema.notRequired(),
  }),

  ticketUrl: Yup.string().when('ticketLinkType', {
    is: (value) => value === 'external',
    then: (schema) => schema.required('URL is Required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  registrationRequired: Yup.string().required('Registration Needed is required'),
  capacity: Yup.number()
    .positive('Capacity must be a positive number')
    .integer('Capacity must be an integer')
    .required('Capacity is required'),
  organizerName: Yup.string().required('Organizer Name is required'),
  organizerEmail: Yup.string()
    .email('Invalid email format')
    .required('Organizer Email is required'),
  organizerPhone: Yup.string().required('Organizer Phone is required'),
  startDate: Yup.date().required('Start Date is required').nullable(),
  endDate: Yup.date()
    .required('End Date is required')
    .nullable()
    .min(Yup.ref('startDate'), 'End Date must be after Start Date'),
  startTime: Yup.string().required('Start Time is required'),
  endTime: Yup.string().required('End Time is required'),
  featuredEvent: Yup.string().required('Featured Event selection is required'),
});

export default validationSchema;
