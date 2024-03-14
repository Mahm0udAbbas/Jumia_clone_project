import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import topLogo from "@/public/1.png";
import bottomLogo from "@/public/bottom-logo.png";
import { useRouter } from "next/router";
import { useState } from "react";

function Login() {
  const { register, handleSubmit, formState } = useForm();
  const [errors, setErrors] = useState({ password: "" });
  const router = useRouter();
  const { login: email } = router.query;

  async function userLogin({ email, password }) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        if (err.code == "auth/wrong-password") {
          setErrors({ ...errors, password: "Password Wrong" });
        }
      });
    router.push("/");
  }

  return (
    <Card className="flex flex-col items-center mt-10" shadow={false}>
      <div className="flex flex-col items-center w-[30rem]">
        <Image
          width={120}
          height={120}
          className="object-cover object-center mb-3"
          src={topLogo}
          alt="logo-image"
        />
        <Typography variant="h3" color="black">
          Welcome to back.
        </Typography>
        <Typography color="black" className="mt-1 text-center">
          Log back into your Jumia account.
        </Typography>
      </div>
      <form className="mb-20" onSubmit={handleSubmit(userLogin)}>
        <div className="w-[28rem] mt-20">
          <Input
            size="lg"
            value={email}
            {...register("email")}
            disabled
            color="orange"
            label="Enter your email"
          />
        </div>
        <div className="w-[28rem] my-10">
          <Input
            type="password"
            size="lg"
            onClick={() => {
              setErrors({ ...errors, password: "" });
            }}
            color={errors.password ? "red" : "orange"}
            label="Password"
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "Must be 8 characters." },
            })}
          />
          <p className="text-red-600 text-xs">
            {formState.errors.password?.message}
          </p>
          <p className="text-red-600 text-xs">{errors.password}</p>
        </div>
        <Button
          type="submit"
          className="mt-6 text-white"
          size="lg"
          color="amber"
          fullWidth
        >
          Continue
        </Button>
      </form>
      <div className="w-[28rem]">
        <Typography color="black" className="text-sm text-center">
          For further support, you may visit the Help Center or contact our
          customer service team.
        </Typography>
        <div className="flex flex-col  items-center mt-5">
          <Image
            width="70"
            height="70"
            className="object-cover object-center"
            src={bottomLogo}
            alt="another-logo"
          />
        </div>
      </div>
    </Card>
  );
}

export default Login;
export const loginSignup = (page) => page;
Login.getLayout = loginSignup;
