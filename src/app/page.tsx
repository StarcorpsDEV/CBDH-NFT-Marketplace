"use client";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          {/* Delete this <Card /> in your own app */}
          <Card border="1px" maxW="90vw" mx="auto">
            <CardHeader>
              <Heading size="md">Collectif of the Badgers Diamond Hands</Heading>
            </CardHeader>

            <CardBody>
            <Link _hover={{ textDecoration: "none" }}
                href={`https://badgerscollectif.com`}
                target={'_blank'}
              >
                <Image src={"cbdh_logo.webp"}  style={{"position":"relative", "width":"25%", "left":"37.5%"}}/>
                <Text mt="10px">
                  {"To Mint and Stake the Collectif NFTs visit our Gallery."}
                </Text>
            </Link>
            </CardBody>
          </Card>
          <Heading  size="md" ml="20px" mt="40px">
            Trending collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                <Text fontSize="large" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}