import React from "react";
import { useNavigate } from "react-router-dom";

const ChallengeFriend = ({ friendName,setFriendName }) => {
  const inviteLink = `${window.location.origin}/challenge?user=${friendName}`;
  const navigate = useNavigate();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Challenge link copied!");
  };

  const inviteFriend = (e) => {
    navigate(`/challenge?friendName=${friendName}`);
  };

  return (
    <div className="p-4 border rounded-lg shadow text-center"
      style={{
        width: "50%",
        margin: "auto",
        padding: "20px",
        marginTop:"10px"
        
    }}
    >
      <h2 className="text-xl font-semibold">Challenge a Friend</h2>
      <p className="text-sm text-gray-600">Invite your friend to play:</p>
      <input
        type="text"
        value={friendName}
        onChange={(e) => {
          console.log("e",e)
          setFriendName(e?.target?.value)
        }}
        className="border p-2 w-full my-2 text-center"
      />
      {/* <button onClick={copyToClipboard} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Copy Link
      </button> */}
      <button onClick={inviteFriend} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Send Invite Link
      </button>
    </div>
  );
};

export default ChallengeFriend;
