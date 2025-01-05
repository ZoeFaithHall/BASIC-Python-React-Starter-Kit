import Input from "../atoms/Input";
import Button from "../atoms/Button";

const CostForm = ({
  item,
  cost,
  quantity,
  setItem,
  setCost,
  setQuantity,
  onSubmit,
}: {
  item: string;
  cost: string;
  quantity: string;
  setItem: (value: string) => void;
  setCost: (value: string) => void;
  setQuantity: (value: string) => void;
  onSubmit: () => void;
}) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item name"
      />
      <Input
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Enter cost per item"
        type="number"
      />
      <Input
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
        type="number"
      />
      <Button variant="primary">Submit</Button>
    </form>
  );
};

export default CostForm;