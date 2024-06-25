import { Input } from "@nextui-org/react";
import { useState } from "react";

export const AuthenticationPage = () => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailBlur = () => {
      setIsInvalid(!isValidEmail(email));
    };

    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-96 h-32 lg:h-64 p-4">
            <div className="pb-4">
              <span className="text-4xl">Sign In</span>
            </div>
            <div>Use your Email</div>
          </div>
          <div className="w-96 h-32 lg:h-64 p-4 flex flex-col">
            <div className="flex-grow flex flex-col gap-3">
              <Input
                label="Email"
                type="email"
                placeholder="johnsmith@gmail.com"
                variant="bordered"
                radius="sm"
                isInvalid={isInvalid}
                errorMessage="Enter a valid email"
                size="lg"
                value={email}
                onValueChange={setEmail}
                onBlur={handleEmailBlur}
                />
            </div>
          </div>
          <div className="w-96 h-32 lg:h-64 p-4 flex flex-col">
            <div className="flex-grow flex flex-col gap-3">
              <Input
                label="Password"
                type="password"
                placeholder="password"
                variant="bordered"
                radius="sm"
                isInvalid={isInvalid}
                errorMessage="Email and password do not match"
                size="lg"
                value={password}
                onValueChange={setPassword}
                />
            </div>
          </div>
        </div>
      </div>
    )
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}