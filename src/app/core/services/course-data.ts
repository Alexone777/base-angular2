import { ICourse } from '../../interfaces/ICourse';


export const COURSES : ICourse[] = [
  {
    title : 'AngularJS',
    id : 1,
    topRated : true,
    duration : 180,
    date : new Date(),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'ReactJS',
    id : 2,
    topRated : false,
    duration : 210,
    date : new Date(2017,2,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'ViewJS',
    id : 3,
    topRated : false,
    duration: 195,
    date : new Date(2017,4,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : 'Node js',
    id : 4,
    topRated : true,
    duration : 210,
    date : new Date(2018,2,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  },{
    title : '.NET',
    id : 5,
    topRated : false,
    duration: 195,
    date : new Date(2017,4,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
  }
];
