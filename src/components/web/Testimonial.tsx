import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CircleUserRound, Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TestimonialData = [
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. ",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate, and I appreciated ",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate, and I appreciated the clear instructions and the availability calendar that showed all the open slots.",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate, and I appreciated the clear instructions and the availability calendar that showed all the open slots.",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate, and I appreciated the clear instructions and the availability calendar that showed all the open slots.",
    image: "",
    rating: 4,
  },
  {
    name: "jahid hasan",
    text: "The booking process was straightforward and user-friendly. I was able to book a court online in just a few minutes. The website was easy to navigate, and I appreciated the clear instructions and the availability calendar that showed all the open slots.",
    image: "",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="container py-11">
      <h2 className="text-[35px] md:text-[45px] font-medium leading-tight text-center underline">
        Out Client Review
      </h2>
      <div className="mt-11">
        <Carousel
          opts={{
            align: "center",
          }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
          className="w-full max-w-[80vw] mx-auto"
        >
          <CarouselContent>
            {TestimonialData?.map((item, index) => (
              <CarouselItem
                key={`testimonial-${index}`}
                className="md:basis-[60%] lg:basis-[49%] xl:basis-[33%] 2xl:basis-[30%]"
              >
                <div className="p-1">
                  <Card className="h-[300px] flex flex-col justify-between">
                    <CardContent className="flex flex-col gap-5 p-6">
                      <div>
                        <Quote />
                      </div>
                      <div>
                        <p className="line-clamp-6">{item.text}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src={item.image} alt="client image" />
                          <AvatarFallback>
                            <CircleUserRound />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p>{item.name}</p>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={`star_item-${i}`}
                                fill={
                                  i + 1 <= item.rating ? "#f97150" : "#ffcd9c"
                                }
                                strokeWidth={0}
                                size={12}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
