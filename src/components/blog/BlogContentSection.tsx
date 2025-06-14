import { Link } from "react-router-dom";

interface BlogContentSectionProps {
  section: {
    title: string;
    content: string[];
  };
  sectionIndex: number;
  additionalImages?: string[];
  title: string;
}

export default function BlogContentSection({ 
  section, 
  sectionIndex, 
  additionalImages, 
  title 
}: BlogContentSectionProps) {
  const isEven = sectionIndex % 2 === 0;
  const imageIndex = sectionIndex % (additionalImages || []).length;
  const hasAdditionalImage = additionalImages && additionalImages[imageIndex] && section.title !== "Συμπέρασμα";

  const renderParagraphWithLinks = (paragraph: string, paragraphIndex: number) => {
    const linkMap = {
      "μεταλλικές αρχειοθήκες": "/metallic-filing-cabinets",
      "αρχειοθήκες γραφείου": "/metallic-filing-cabinets",
      "συρταριέρες αρχειοθέτησης": "/metallic-drawers",
      "μεταλλικές ντουλάπες": "/metallic-cabinets",
      "lockers": "/metallic-lockers",
      "Συρταριέρες": "/metallic-drawers",
      "μελέτες περίπτωσης": "/?scrollTo=projects",
      "προσαρμογή": "/?scrollTo=contact"
    };

    for (const [text, link] of Object.entries(linkMap)) {
      if (paragraph.includes(text) && (!paragraph.includes("Stereom") || text !== "μεταλλικές ντουλάπες") && (!paragraph.includes("Προσφέρουμε") || text !== "lockers")) {
        const parts = paragraph.split(text);
        return (
          <p key={paragraphIndex} className="text-metal-600 leading-relaxed mb-3" style={{ lineHeight: '1.6' }}>
            {parts[0]}
            <Link to={link} className="text-blue-600 hover:text-blue-700 underline">
              {text}
            </Link>
            {parts[1]}
          </p>
        );
      }
    }

    return (
      <p key={paragraphIndex} className="text-metal-600 leading-relaxed mb-3" style={{ lineHeight: '1.6' }}>
        {paragraph}
      </p>
    );
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-black">
        {section.title}
      </h3>
      
      {hasAdditionalImage ? (
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          <div className={`lg:col-span-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="overflow-hidden rounded-xl h-96 bg-gray-50 flex items-center justify-center">
              <img 
                src={additionalImages[imageIndex]} 
                alt={`${title} - Επιπλέον εικόνα ${imageIndex + 1}`} 
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
          <div className={`lg:col-span-3 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            {section.content.map(renderParagraphWithLinks)}
          </div>
        </div>
      ) : (
        <div>
          {section.content.map(renderParagraphWithLinks)}
        </div>
      )}
    </div>
  );
}
