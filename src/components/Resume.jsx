import SkillSection from "./SkillSection";

export default function Resume() {
  const handleDownload = () => {
    // Replace 'your-resume-link.pdf' with the actual URL of your resume
    window.open("https://drive.google.com/file/d/1AfCygRvJ3CG6B0Zj_hM3uFKl-VoKI_v3/view?usp=drivesdk", "_blank");
  };
  return (
    <div className="md:flex">
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
         Resume
      </button>
    </div>
  );
}
