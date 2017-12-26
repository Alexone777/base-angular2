import { ICourse } from '../../interfaces/ICourse';


export const COURSES : ICourse[] = [
  {
    title : 'AngularJS',
    id : 1,
    topRated : true,
    duration : '2h26m',
    date : new Date(2017,11,20),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'ReactJS',
    id : 2,
    topRated : false,
    duration : '1h26m',
    date : new Date(2017,2,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'ViewJS',
    id : 3,
    topRated : false,
    duration : '26m',
    date : new Date(2017,4,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  }
];
