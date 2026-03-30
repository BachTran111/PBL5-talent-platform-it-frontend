import type { Company } from '@/@types/company'
import { Card } from '@/components/ui/card'

type Props = {
  company: Company
}

export const CompanyCard = ({ company }: Props) => {
  return (
    <Card className="p-5 flex gap-4 border hover:border-primary hover:shadow-md transition group">
      
      {/* Logo */}
      <div className="w-14 h-14 rounded-xl overflow-hidden border bg-gray-50 flex items-center justify-center">
        <img
          src={company.company_image}
          alt={company.company_name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        
        {/* Name */}
        <h3 className="text-lg font-bold group-hover:text-primary cursor-pointer">
          {company.company_name}
        </h3>

        {/* Info */}
        <p className="text-sm text-gray-500 mb-3">
          {company.company_industry} • {company.city}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {company.key_skills?.split(',').slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-xs rounded"
            >
              {skill.trim()}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {company.company_size}
          </span>

          <a
            href={company.company_website_url}
            target="_blank"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Xem công ty
          </a>
        </div>
      </div>
    </Card>
  )
}