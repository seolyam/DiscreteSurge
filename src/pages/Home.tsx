import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center">
          Welcome to DiscreteSurge
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-xl mb-4">Your Onto Function Calculator</p>
        <p className="text-muted-foreground">
          This calculator was developed as part of our Learning Evidence 2
          project for the Discrete Structures course. It helps determine whether
          a given function is onto (surjective) by analyzing its domain and
          range.
        </p>
      </CardContent>
    </Card>
  );
}
