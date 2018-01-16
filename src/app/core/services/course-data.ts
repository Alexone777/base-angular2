import { ICourse } from '../../interfaces/ICourse';


export const COURSES : ICourse[] = [
  {
    title : 'AngularJS',
    id : 1,
    topRated : true,
    duration : 180,
    date : new Date(2017,12,10),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.',
    upcoming: Math.ceil((new Date() - new Date(2017,12,10)) / (1000 * 3600 * 24)) < 14
  },{
    title : 'ReactJS',
    id : 2,
    topRated : false,
    duration : 210,
    date : new Date(2017,2,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.',
    upcoming: Math.ceil((new Date() - new Date(2017,2,3)) / (1000 * 3600 * 24)) < 14
  },{
    title : 'ViewJS',
    id : 3,
    topRated : false,
    duration: 195,
    date : new Date(2017,4,3),
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.',
    upcoming: Math.ceil((new Date() - new Date(2017,4,3)) / (1000 * 3600 * 24)) < 14
  }
];
