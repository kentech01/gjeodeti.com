"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle, Clock, Euro, Phone } from "lucide-react";
import { services } from "../../constants/services";
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 560px, 100vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Badge className="bg-white/90 text-gray-900">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </Badge>
                    <Badge className="bg-green-600 text-white">
                      <Euro className="w-3 h-3 mr-1" />
                      {service.price}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 min-h-[550px] flex flex-col justify-between">
                  <h3 className="text-xl text-gray-900 ">{service.title}</h3>
                  <p className="text-gray-600 ">{service.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-900 my-2">Përfshin:</h4>
                      <div className="space-y-1">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm text-gray-900 mb-2">Pajisjet:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.equipment.map((e) => (
                          <Badge key={e} variant="outline" className="text-xs">
                            {e}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 text-primary bg-secondary hover:bg-secondary-light"
                    asChild
                  >
                    <a href="tel:+38349298111">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Kërko Ofertë
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
