import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Clock, MapPin } from "lucide-react";

export default function OfficeCard() {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardContent className="p-8">
        <div className="aspect-video bg-slate-200 rounded-lg mb-6 flex items-center justify-center">
          <MapPin className="h-12 w-12 text-slate-400" />
          <span className="ml-2 text-slate-500">
            Interactive Map Coming Soon
          </span>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-slate-800">
            Gjeodeti SH.P.K. Headquarters
          </h4>
          <p className="text-slate-600">
            Rruga Bill Klinton
            <br />
            10000 Prishtina, Kosovo
          </p>
          <div className="flex items-center text-sm text-slate-600">
            <Clock className="h-4 w-4 mr-2" />
            Mon-Fri: 8:00 AM - 6:00 PM
          </div>
          <Button
            variant="outline"
            className="w-full border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white"
          >
            Get Directions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
