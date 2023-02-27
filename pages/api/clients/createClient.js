import { createClient } from "@/lib/controllers/clientControllers"



export default async function  handler (req, res) {
  const {name, password, phone, email, totalAppointments, totalPaid } = req.body
  const newClient = await createClient(name, password, phone, email, totalAppointments, totalPaid)
 res.status(200).json(newClient);
  
}
