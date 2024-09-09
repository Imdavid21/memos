import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div>
      <SignIn path="/auth/signin" routing="path" />
    </div>
  );
};

export default SignInPage;
