import * as Yup from 'yup';

const validationSchema = Yup.object({
  category: Yup.string().required('Category is required'),
  youtubeUrl: Yup.string().required('Youtube Url is required'),
  ethnicity: Yup.string().required('Ethnicity is required'),
  eventTitle: Yup.string()
    .max(60, 'Event Title must be at most 60 characters')
    .required('Event Title is required'),
  // description: Yup.string()
  //   .required('Description is required')
  //   .min(10, 'Description must be at least 10 characters'),
  // policy: Yup.string()
  //   .required('Policy is required')
  //   .min(10, 'Policy must be at least 10 characters'),
  // amenities: Yup.string()
  //   .required('Amenities are required')
  //   .min(10, 'Amenities must be at least 10 characters'),
  address: Yup.string().required('Event Address is required'),
  place: Yup.string().required('Name of Place is required'),

  // Conditionally required ticket link type
  ticketLinkType: Yup.string().when('eventType', {
    is: (value) => value === 'Paid',
    then: (schema) => schema.required('Link Type is required'),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Conditionally required ticket URL
  ticketUrl: Yup.string().when('ticketLinkType', {
    is: (value) => value === 'external',
    then: (schema) => schema
      .url('Must be a valid URL')
      .required('URL is required'),
    otherwise: (schema) => schema.notRequired(),
  }),

  capacity: Yup.number()
    .positive('Capacity must be a positive number')
    .integer('Capacity must be an integer')
    .required('Capacity is required'),

  // Dates and Times validations
  startDate: Yup.date()
    .required('Start Date is required')
    .nullable(),
  endDate: Yup.date()
    .required('End Date is required')
    .nullable()
    .min(Yup.ref('startDate'), 'End Date must be after Start Date'),
  startTime: Yup.string().required('Start Time is required'),
  endTime: Yup.string().required('End Time is required'),

  // Featured event selection
  featuredEvent: Yup.string().required('Featured Event selection is required'),

 
});

export default validationSchema;
