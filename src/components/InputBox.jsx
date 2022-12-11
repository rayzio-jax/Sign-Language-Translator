import React, { useState } from "react";
import $ from "jquery";
import { BsFillVolumeUpFill } from "react-icons/bs";
import MicInput from "./MicBtn";

export default function InputBox(props) {
	const content = document.getElementById("content");
	$(content).addClass("container box-content mx-auto my-10");

	const [myText, setMyText] = useState("");
	const msg = new SpeechSynthesisUtterance(myText);

	const speechHandler = (msg) => {
		msg.lang = "id-ID";
		window.speechSynthesis.speak(msg);
	};

	return (
		<div
			id="input-box"
			className="drop-shadow-[0_0_7px_rgba(0,0,0,0.2)] mx-auto sm:mx-0 w-full"
		>
			<div className="flex md:flex-row">
				<textarea
					id="text-input"
					className="mx-5 p-5 h-[20vh] sm:h-[30vh] md:h-[40vh] xl:h-[55vh] font-Poppins text-in sm:text-xl md:text-2xl xl:text-xl rounded-t-lg bg-slate-100 resize-none 
            border-none focus:ring-2 focus:ring-black flex-grow text-black
            scrollbar-thin scrollbar-track-[#CFD5DD] scrollbar-thumb-black scrollbar-thumb-rounded-2xl scrollbar-thumb-cursor-pointer"
					placeholder="Masukkan teks disini.."
					onChange={(e) => setMyText(e.target.value)}
				></textarea>
			</div>
			<div className="flex bg-slate-100 border-t-2 border-t-slate-300 gap-x-4 p-4 rounded-b-xl mx-5 items-center">
				<div className="flex-grow">
					<button
						id="generate-img"
						className="bg-gradient-to-br from-[rgba(114,199,255,1)0%] to-[rgba(72,159,216,1)100%]
                    p-3 rounded-lg text-white font-Poppins text-xl shinyBtn"
					>
						Generate
					</button>
				</div>
				<div id="sound-features" className="flex items-center gap-x-4">
					<div>
						<BsFillVolumeUpFill
							className="text-[30px] md:text-4xl text-black cursor-pointer hover:text-[#54494B] active:opacity-80
                    transition-all ease-in duration-200"
							onClick={() => speechHandler(msg)}
						/>
					</div>
					<MicInput />
				</div>
			</div>
		</div>
	);
}
