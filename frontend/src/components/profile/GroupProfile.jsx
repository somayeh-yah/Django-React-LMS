import profileImg1 from "../../assets/images/profile1.jpg";
import profileImg2 from "../../assets/images/profile2.jpg";
import profileImg3 from "../../assets/images/profile3.jpg";
import profileImg4 from "../../assets/images/profile4.jpg";
import SingleProfile from "./SingleProfile";

export default function GroupProfile() {
  const members = [
    { id: 1, src: profileImg4, tooltip: "Alex Yahyaei" },
    { id: 2, src: profileImg2, tooltip: "Maya Laysooo" },
    { id: 3, src: profileImg3, tooltip: "Donya Kayoo" },
    { id: 4, src: profileImg1, tooltip: "Sepia Serro" },
  ];

  return (
    <div className="hidden sm:flex justify-center items-center -space-x-5 w-full -ms-1 shrink">
      {members.map((m) => {
        return (
          <SingleProfile
            key={m.id}
            src={m.src}
            name={m.tooltip}
            alt="profile image"
          />
        );
      })}
    </div>
  );
}
