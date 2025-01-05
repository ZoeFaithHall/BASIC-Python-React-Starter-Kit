import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface NameFormProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const NameForm = ({ name, setName, onSubmit }: NameFormProps) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-semibold text-gray-700">Enter your name</span>
        </label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <Button variant="primary">Submit</Button>
    </form>
  );
};

export default NameForm;