import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <div className="max-w-4xl mt-16 border shadow-md rounded-md border-blue-500 p-6">
      <h1 className="mb-1 text-2xl text-blue-500 font-bold">New Note</h1>
      <div className="mb-4 border-b border-blue-600 w-28 ml-[-4px]" />
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
}
