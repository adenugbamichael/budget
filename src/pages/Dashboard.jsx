// rrd imports
import { useLoaderData } from "react-router-dom"

//  helper functions
import { fetchData } from "../helpers"
// components
import Intro from "../components/Intro"

// library import
import { toast } from "react-toastify"

// loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  return { userName }
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    throw new Error("Ya done")
  } catch (e) {
    throw new Error("There was a creating your account")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return <>{userName ? <p> {userName}</p> : <Intro />}</>
}
export default Dashboard

// localStorage.setItem("userName", JSON.stringify(formData.userName))
// return toast.success(`Welcome, ${formData.userName}`)
