import { ICourse } from '../../interfaces/ICourse';


export const COURSES : ICourse[] = [
  {
    title : 'Video course',
    id : 1,
    duration : '2h26m',
    date : new Date(2017,11,22),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'Video course',
    id : 2,
    duration : '1h26m',
    date : new Date(2017,2,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'Video course',
    id : 3,
    duration : '26m',
    date : new Date(2017,4,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  }
];
