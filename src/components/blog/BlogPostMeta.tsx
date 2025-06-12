
import { Calendar, User } from "lucide-react";

interface BlogPostMetaProps {
  date: string;
  author: string;
}

export default function BlogPostMeta({ date, author }: BlogPostMetaProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-metal-600 mb-8">
      <div className="flex items-center gap-1">
        <Calendar size={14} />
        {new Date(date).toLocaleDateString('el-GR')}
      </div>
      <div className="flex items-center gap-1">
        <User size={14} />
        {author}
      </div>
    </div>
  );
}
