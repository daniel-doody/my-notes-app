import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <div className="flex-col max-w-4xl mt-16 border shadow-md px-12 rounded-md pb-28 border-blue-500 p-6">
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="text-blue-500 text-2xl font-medium py-3">
            {note.title}
          </h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button
                className="bg-blue-500 shadow-md border-blue-600 hover:bg-blue-600 px-4 hover:scale-105"
                variant="primary"
              >
                Edit
              </Button>
            </Link>
            <Button
              className="bg-red-500 shadow-sm border-red-600 hover:bg-red-600 px-3 text-white hover:scale-105"
              onClick={() => {
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button
                className="hover:scale-105 transition-transform px-3"
                variant="outline-secondary"
              >
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </div>
  );
}
