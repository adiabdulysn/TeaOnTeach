import { redirect } from 'next/navigation';

export default function Home() {
  // We automatically redirect users from the root to the login page
  redirect('/login');
}
