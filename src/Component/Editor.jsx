import PropTypes from "prop-types";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import Showdown from "showdown";
import { useState } from "react";

export default function Editor(props) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <div className="editor bg-white p-6 rounded-lg shadow-lg">
      <ReactMde
        value={props.currentNote.body}
        onChange={props.updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
        className="w-full"
      />
    </div>
  );
}

Editor.propTypes = {
  currentNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  updateNote: PropTypes.func.isRequired,
};
