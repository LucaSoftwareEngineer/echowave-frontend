import { useAppSelector } from "../redux/Hooks";
import { useNavigate } from "react-router";

const useCheckToken = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.token);

  if (token === '' || !token) {
    navigate('/login');
  }
  
};

export default useCheckToken;
