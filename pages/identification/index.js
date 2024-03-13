import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { getAuth, fetchSignInMethodsForEmail } from "firebase/auth";
import { useRouter } from "next/router";
import {auth} from "@/firebase";
import Image from 'next/image';
import topLogo from "@/public/1.png";
import bottomLogo from "@/public/bottom-logo.png";



function Login_signup() {
  // const auth = getAuth(firestore);
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, } = useForm();

  async function loginOrSignup({ email }) {
    const isExist = await fetchSignInMethodsForEmail(auth, email);
    if (isExist.length) {
      router.push("/identification/login/" + email);
    } else {
      router.push("/identification/signup/" + email);
    }
  }
  return (
    <Card className='flex flex-col items-center mt-10' shadow={false}>
      <div className='flex flex-col items-center w-[30rem]'>
        <Image width="70" height="70" className='object-cover object-center mb-3' src={topLogo} alt='logo-image' />
        <Typography variant="h3" color="black">
          Welcome to Jumia
        </Typography>
        <Typography color="black" className="mt-1 text-center">
          Type your e-mail or phone number to log in or create a Jumia account.
        </Typography>
      </div>

      <form className="border-b-2" onSubmit={handleSubmit(loginOrSignup)}>
        <div className='w-[28rem] my-10'>
          <Input size="lg" color={(errors.email) ? "red" : "orange"} label="Enter your email" {...register("email", {
            required: true, pattern: {
              value: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(gmail|yahoo|outlook)+(.com)$/,
              message: "This email is not valid. inser valid email to continue. Email must be (gmail - yahoo - outlook)."
            }
          })} />
          <p className="text-red-600 text-xs">{errors.email?.message}</p>
        </div>

        <Button type="submit" className="mt-6" size='lg' color='orange' fullWidth>
          Continue
        </Button>
        <Typography color="black" className="text-xs my-2 text-center">
          By continuing you agree to Jumia&apos;s
          <a href="#" className="block underline mt-1 text-orange-500">
            Terms and Conditions
          </a>
        </Typography>
      </form>
      <div className='w-[28rem]'>
        <Button className="mt-5 mb-8 hover:bg-orange-800/5" size='lg' variant="outlined" color='orange' fullWidth>
          Login with Passkeys
        </Button>
        <Button className="mt-12 mb-8" size='lg' color='blue' fullWidth>
          Login with Facebook
        </Button>
        <Typography color="black" className="text-sm text-center">
          For further support, you may visit the Help Center or contact our customer service team.
        </Typography>
        <div className='flex flex-col  items-center mt-5'>
          <Image width="50" height="50" className='object-cover object-center' src={bottomLogo} alt='another-logo' />
        </div>
      </div>
    </Card>
  )
}

export default Login_signup;

