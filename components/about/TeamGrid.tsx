"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Users } from "lucide-react";
import { teamMembers } from "../../constants/about";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// Import local assets to ensure they render correctly in the browser
import teamImg1 from "./assets/gjeodeti-team-img.jpg";
import teamImg2 from "./assets/gjeodeti-team-img2.jpg";
import teamImg3 from "./assets/gjeodeti-team-img3.jpg";
import teamImg4 from "./assets/gjeodeti-team-img4.jpg";
import teamImg5 from "./assets/gjeodeti-team-img5.jpg";

const localTeamImages = [
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
] as const;

export default function TeamGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Ekipi ynë</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionistë të kualifikuar me përvojë të gjatë dhe angazhim për
            përsosmëri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="w-full aspect-[5/3] md:aspect-[4/3] bg-gray-100">
                  {(() => {
                    const imported = localTeamImages[
                      index % localTeamImages.length
                    ] as unknown as string | { src?: string };
                    const importedSrc =
                      typeof imported === "string" ? imported : imported?.src;
                    const finalSrc = importedSrc || member.image;
                    if (finalSrc) {
                      return (
                        <ImageWithFallback
                          src={finalSrc}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      );
                    }
                    return (
                      <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                    );
                  })()}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
