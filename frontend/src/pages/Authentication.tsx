import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MailCheck } from "lucide-react";

function Authentication() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
      console.log("hello world");
    }, 5000);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <MailCheck size={64} className="text-indigo-600 mb-4" />
        <h2 className="text-xl text-indigo-600 font-semibold text-center">
          Please check your registered email to verify your account.
        </h2>
      </motion.div>
      
      <motion.div
        className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mt-6"
      ></motion.div>
    </div>
  );
}

export default Authentication;

