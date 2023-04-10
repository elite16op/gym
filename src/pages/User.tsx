import Exercise from "../components/Exercise";
import Email from "../components/Contact";
import NavDash from "../components/NavDash";
import axios from "axios";
import {useEffect, useState} from 'react'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Course from "../components/Course";
import { useSelector } from "react-redux";
import disableScroll from 'disable-scroll'


type Props = {}

type element = {
    id : number,
    name : string,
    difficulty : string,
    description : string,
}

type element1 = {
  id : string,
  name : string,
  videoUrl : string,
  thumbnailUrl : string,
}

const User = (props: Props) => {

  disableScroll.off();

  const where = useSelector((state:any)=>state.dashAt.at);

    const [d,setD] = useState(true);
    const navigate = useNavigate();

    const [c,setC] = useState(false);

    let data : element[] = exercises;
    let course : element1[] = courseData;

    const check = () => {
      if (where==="exer") {
        setD(true);
        setC(false);
      } else {
        setD(false);
        setC(true);
      }
    }

    useEffect(() => {
        if (Cookies.get("id")=="") {
            navigate("/");
        }
        check();
    }, [where])

    

  return (
    <div>
        <NavDash />
        {d && <div className="flex content-center">
        <div className="w-[85%] mx-auto inline-block lg:flex lg:justify-between lg:flex-wrap lg:gap-y-5 my-16" style={{
        }}>
            {d && data.map((e:element)=>{
                return (
                    <Exercise name={e.name} key={e.id} difficulty={e.difficulty} description={e.description}  />
                )
            })}
        </div>
        </div> }
        {c && <div className="flex content-center">
        <div className="w-[85%] mx-auto inline-block lg:flex lg:justify-between lg:flex-wrap lg:gap-y-5 my-16" style={{
        }}>
            {c && course.map((e:element1)=>{
                return (
                    <Course name={e.name} key={e.id} videoUrl={e.videoUrl} thumbnailUrl={e.thumbnailUrl}  />
                )
            })}
        </div>
        </div>  }      
        <Email />
    </div>
  )
}

export default User





// hard coded data 
const exercises = [
    {
      id: 1,
      name: "Push-ups",
      description: "A classic exercise that targets the chest, triceps, and shoulders.",
      difficulty: "Beginner",
    },
    {
      id: 2,
      name: "Squats",
      description: "A compound exercise that targets the quadriceps, hamstrings, and glutes.",
      difficulty: "Beginner",
    },
    {
      id: 3,
      name: "Lunges",
      description: "A unilateral exercise that targets the quadriceps, hamstrings, and glutes.",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      name: "Deadlifts",
      description: "A compound exercise that targets the posterior chain muscles.",
      difficulty: "Intermediate",
    },
    {
      id: 5,
      name: "Bench Press",
      description: "A compound exercise that targets the chest, triceps, and shoulders.",
      difficulty: "Intermediate",
    },
    {
      id: 6,
      name: "Pull-ups",
      description: "An upper body exercise that targets the back and biceps.",
      difficulty: "Intermediate",
    },
    {
      id: 7,
      name: "Military Press",
      description: "An exercise that targets the shoulders and triceps.",
      difficulty: "Advanced",
    },
    {
      id: 8,
      name: "Barbell Curls",
      description: "An exercise that targets the biceps.",
      difficulty: "Advanced",
    },
    {
      id: 9,
      name: "Dips",
      description: "An exercise that targets the chest, triceps, and shoulders.",
      difficulty: "Advanced",
    },
  ];
  

const courseData = [
  {
    "id": "1",
    "name": "Full Body Workout for Beginners",
    "videoUrl": "https://www.youtube.com/watch?v=I7aJdLqmwXE",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVIJRxEXBPUQCKlX5T7w5VHLrzW5EhxwA4A&usqp=CAU"
  },
  {
    "id": "2",
    "name": "30 Minute Cardio HIIT Workout",
    "videoUrl": "https://www.youtube.com/watch?v=ml6cT4AZdqI",
    "thumbnailUrl": "https://i.ytimg.com/vi/ml6cT4AZdqI/maxresdefault.jpg"
  },
  {
    "id": "3",
    "name": "10 Minute Abs Workout",
    "videoUrl": "https://www.youtube.com/watch?v=1919eTCoESo",
    "thumbnailUrl": "https://i.ytimg.com/vi/1919eTCoESo/maxresdefault.jpg"
  },
  {
    "id": "4",
    "name": "Yoga for Flexibility",
    "videoUrl": "https://www.youtube.com/watch?v=7kgZnJqzNaU",
    "thumbnailUrl": "https://i.ytimg.com/vi/7kgZnJqzNaU/maxresdefault.jpg"
  },
  {
    "id": "5",
    "name": "How to Deadlift for Beginners",
    "videoUrl": "https://www.youtube.com/watch?v=op9kVnSso6Q",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAw4PHrY6qsU6V7d75FTbMokhbpNsg3ACRw&usqp=CAU"
  },
  {
    "id": "6",
    "name": "Resistance Band Leg Workout",
    "videoUrl": "https://www.youtube.com/watch?v=0iD-OTv5fvo",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxE1o-jwQH-twxciNw8rKm5ilSAhX-VPV2pA&usqp=CAU"
  },
  {
    "id": "7",
    "name": "Full Body Dumbbell Workout",
    "videoUrl": "https://www.youtube.com/watch?v=U9dLxSs7Fjk",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjM6fYDZ5FIEeF0oWTBmLZSFP8j88Yy-3eA&usqp=CAU"
  },
  {
    "id": "8",
    "name": "Pilates for a Strong Core",
    "videoUrl": "https://www.youtube.com/watch?v=Ks-lsZsDXvI",
    "thumbnailUrl": "https://post.healthline.com/wp-content/uploads/2021/04/pilates-machine-reformer-732x549-thumbnail.jpg"
  },
  {
    "id": "9",
    "name": "Beginner's Guide to Kettlebell Training",
    "videoUrl": "https://www.youtube.com/watch?v=OXMy_Cjqk3Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/t-3H2KnjH6E/maxresdefault.jpg"
  }, 
]
