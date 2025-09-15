"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, MapPin, CheckCircle, Filter } from "lucide-react";
import { categories, projects } from "../../constants/work";
import Image from "next/image";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo(
    () =>
      selectedCategory === "all"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <>
      {/* Filter Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Kategoria:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={"outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "text-secondary font-semibold border-secondary-light hover:bg-secondary-extra-light hover:text-secondary"
                      : "border-secondary-light text-secondary-light cursor-pointer hover:bg-secondary-extra-light hover:text-secondary"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 560px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={
                          project.status === "Përfunduar"
                            ? "bg-green-600 text-white"
                            : "bg-blue-600 text-white"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Overlay mini-info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Klienti:</span>
                          <p className="text-gray-900">{project.client}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Sipërfaqja:</span>
                          <p className="text-gray-900">{project.area}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Kohëzgjatja:</span>
                          <p className="text-gray-900">{project.duration}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 text-sm">
                          Shërbimet:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.services.map((srv) => (
                            <Badge
                              key={srv}
                              variant="outline"
                              className="text-xs"
                            >
                              {srv}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.challenges?.length ? (
                        <div>
                          <span className="text-gray-500 text-sm">
                            Sfidat kryesore:
                          </span>
                          <div className="mt-2 space-y-1">
                            {project.challenges.map((c, idx) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-xs text-gray-700">
                                  {c}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* <Button
                      variant="outline"
                      className="w-full mt-6 border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Detaje të Plota
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
