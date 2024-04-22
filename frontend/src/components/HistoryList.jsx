import { FaDownload } from "react-icons/fa6";
import "../../styles/components/HistoryList.css";

const HistoryList = ({ csvFiles }) => {
  return (
    <div className="hl-outer-div">
      <table className="hl-table">
        <tbody>
          {csvFiles.map((file, index) => (
            <tr key={index}>
              <td className="hl-td">{file.name}</td>
              <td className="hl-td">
                <a href={file.downloadURL} target="_blank" className="hl-anchor">
                  <FaDownload size={25}/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryList;
