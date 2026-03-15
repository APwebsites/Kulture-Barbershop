import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"
import { Star } from "lucide-react"

const testimonials = [
  {
    author: {
      name: "Marcus T.",
      handle: "@marcus_deltona",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Best barbershop in Deltona, period. My fade is always on point. Been coming here for months and won't go anywhere else.",
  },
  {
    author: {
      name: "DeShawn R.",
      handle: "@deshawn_cuts",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The barbers here are extremely professional and friendly. They took their time with my son and made him feel comfortable. Highly recommend!",
  },
  {
    author: {
      name: "Jennifer M.",
      handle: "@jen_m_fl",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "My son is non-verbal autistic and they were so patient and considerate — they asked before using the blow dryer. We'll be coming back every time.",
  },
  {
    author: {
      name: "Carlos V.",
      handle: "@carlosv_fl",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Walked in without an appointment and got a clean fade in no time. Kulture is the real deal — sharp lineups and great vibes.",
  },
  {
    author: {
      name: "Tyrone J.",
      handle: "@tyrone_j",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    },
    text: "My son raves about how much he loves his haircuts here. The barbers are skilled, quick, and always leave him looking fresh.",
  },
  {
    author: {
      name: "Ray P.",
      handle: "@ray_p_deltona",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    },
    text: "Clean shop, great energy, and the beard shaping is unmatched. Cash only but totally worth every dollar.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-zinc-950 pt-16">
      {/* Rating summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-amber-400 text-sm font-medium">4.3 Stars · 33+ Google Reviews</span>
        </div>
      </div>

      <TestimonialsSection
        title="What Our Clients Say"
        description="Trusted by the Deltona community. Real reviews from real customers who come back every time."
        testimonials={testimonials}
        className="bg-zinc-950 [--background:theme(colors.zinc.950)]"
      />
    </section>
  )
}
