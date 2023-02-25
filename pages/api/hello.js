// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { startConnection } from "@/mongoose/connection"
import { createClient } from "../../mongoose/index"

startConnection();

export default function  handler (req, res) {
  const {name, phone, email, numberOfAppointments, dollarsPaid } = req.body
  createClient(name, phone, email, numberOfAppointments, dollarsPaid)
 res.status(200).json({ name, phone, email, numberOfAppointments,dollarsPaid })
  
}
