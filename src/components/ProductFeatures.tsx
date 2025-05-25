
import { Product } from "@/data/products";

interface ProductFeaturesProps {
  features: Product['features'];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div>
      <h2 className="text-xl font-medium text-black mb-2">Χαρακτηριστικά</h2>
      <ul className="list-disc list-inside space-y-1 text-metal-600">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
