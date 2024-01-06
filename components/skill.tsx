"use client"
import Badge from "./badge";
import { motion} from "framer-motion"
const fadeInBadgeVarient ={
  initial:{
    opacity:0,
    y:60
  },
  animate:(index:number)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.06*index
    }
  })
}

type skill ={
    id:number,
    name:string
}[]

const Skill = ({skills}:{skills:skill}) => {
  return (
    skills.map((skill) => (
        <motion.span  key={skill.id} viewport={{
          once:true
        }} initial="initial" whileInView={"animate"} custom={skill.id} variants={fadeInBadgeVarient}>
          <Badge content={skill.name} />
        </motion.span>
      ))
  )
}

export default Skill