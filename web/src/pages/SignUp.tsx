import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div>
      <SignUp path="/auth/signup" routing="path" />
    </div>
  );
};

export default SignUpPage;
