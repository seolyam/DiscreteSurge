"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function OntoFunctionCalculator() {
  const [n, setN] = useState<number>(0);
  const [functionValues, setFunctionValues] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const isOnto = (
    n: number,
    f: number[]
  ): { onto: boolean; reason?: string } => {
    if (n <= 0) {
      return { onto: false, reason: "n must be a positive integer." };
    }
    if (f.length === 0) {
      return { onto: false, reason: "Function values cannot be empty." };
    }
    if (f.length !== n) {
      return {
        onto: false,
        reason: `Expected ${n} function values, but got ${f.length}.`,
      };
    }

    const codomain = new Set(Array.from({ length: n }, (_, i) => i + 1));
    const range = new Set(f);

    for (const y of codomain) {
      if (!range.has(y)) {
        return {
          onto: false,
          reason: `The element ${y} from the codomain is not in the range of the function.`,
        };
      }
    }

    return {
      onto: true,
      reason:
        "Every element in the codomain is an image of at least one element from the domain.",
    };
  };

  const checkOnto = () => {
    const values = functionValues.split(" ").map(Number);
    const result = isOnto(n, values);

    setResult(
      result.onto
        ? "The function is onto."
        : `The function is not onto. ${result.reason}`
    );
  };

  const clearForm = () => {
    setN(0);
    setFunctionValues("");
    setResult(null);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          DiscreteSurge Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showForm ? (
          <div className="space-y-4">
            <Button className="w-full" onClick={() => setShowForm(true)}>
              Check if a Function is Onto
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => alert("Thank you for using DiscreteSurge!")}
            >
              Exit
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="n">Size of the set (n):</Label>
              <Input
                id="n"
                type="number"
                min="1"
                value={n || ""}
                onChange={(e) => setN(parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="functionValues">
                Function values (space-separated):
              </Label>
              <Input
                id="functionValues"
                value={functionValues}
                onChange={(e) => setFunctionValues(e.target.value)}
                placeholder="e.g., 2 1 3 for n=3"
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={checkOnto}>Check</Button>
              <Button variant="outline" onClick={clearForm}>
                Clear
              </Button>
            </div>
            {result && (
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Result</AlertTitle>
                <AlertDescription>{result}</AlertDescription>
              </Alert>
            )}
            <Button
              variant="link"
              onClick={() => {
                setShowForm(false);
                clearForm();
              }}
            >
              Go Back
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
