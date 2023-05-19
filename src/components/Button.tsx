import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter";
import styles from "./styles.module.css";

interface ButtonProps {
	text: string;
	action: "increment" | "decrement";
}
type Action = "increment" | "decrement";

const Button: React.FC<ButtonProps> = ({ text, action }) => {
	const dispatch = useDispatch();
	const clickHandle = (action: Action) => {
		if (action === "increment") {
			dispatch(increment());
		} else {
			dispatch(decrement());
		}
	};

	return (
		<button onClick={() => clickHandle(action)} className={styles.button}>
			{text}
		</button>
	);
};

export default Button;
