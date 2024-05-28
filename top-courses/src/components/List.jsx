import React, { useState } from 'react'
import Card from './Card';

const List = ({category,courses}) => {

    const [liked , setLiked] = useState([]);
    
    //returns  list of all courses received from the api response
    function getCourses () {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach(course => {
                    allCourses.push(course);
                });
            });
            return allCourses;
        } else {
            return courses[category];
        }
    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course = {course} liked={liked} setLiked={setLiked}/>
                })
            }
        </div>
    )
}

export default List
