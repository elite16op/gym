import Exercise from "../components/Exercise";
import Email from "../components/Contact";
import NavDash from "../components/NavDash";
import axios from "axios";
import {useEffect, useState} from 'react'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: {muscle: 'biceps'},
    headers: {
      'X-RapidAPI-Key': '29ac37c149msh13826fdddb83388p1aa0adjsn44f7f582afc0',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };


type Props = {}

type element = {
    id : number,
    name : string,
    difficulty : string,
    description : string,
}

const User = (props: Props) => {

    const [d,setD] = useState(true);
    const navigate = useNavigate();

    let data : element[] = exercises;

    useEffect(() => {
        if (Cookies.get("id")=="") {
            navigate("/");
        }
    }, [])

  return (
    <div>
        <NavDash />
        <div className="flex content-center">
        <div className="w-[85%] mx-auto inline-block lg:flex lg:justify-between lg:flex-wrap lg:gap-y-5 my-16" style={{
        }}>
            {d && data.map((e:element)=>{
                return (
                    <Exercise name={e.name} key={e.id} difficulty={e.difficulty} description={e.description}  />
                )
            })}
        </div>
        </div>
        <Email />
    </div>
  )
}

export default User




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
  