import { UserButton } from "@clerk/nextjs"

export default function DashBoard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
