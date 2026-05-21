import { getAdoptRequestById } from "@/lib/data";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Table } from "@heroui/react";
import Actions from "./Actions";


const RequestListingModal = async ({ petData }) => {
    // console.log("pet data from requist listing modal", petData);
    const petId = petData?._id;
    // console.log("petId", petId);

    const reqData = await getAdoptRequestById(petId);
    // console.log("req data", reqData);


    return (
        <Modal>
            <Button className="w-25 rounded-md" variant="secondary">Request</Button>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="max-w-200">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <Table>
                                <Table.ScrollContainer>
                                    <Table.Content aria-label="Team members" className="">

                                        <Table.Header>
                                            <Table.Column isRowHeader>User</Table.Column>
                                            <Table.Column>Pick Up Date</Table.Column>
                                            <Table.Column>Actions</Table.Column>
                                        </Table.Header>

                                        <Table.Body>
                                            {
                                                reqData?.map(item => <Table.Row key={item._id}>
                                                    <Table.Cell>
                                                        <p>{item?.user}</p>
                                                        <p>{item?.email}</p>
                                                    </Table.Cell>

                                                    <Table.Cell>{item?.date}</Table.Cell>

                                                    <Table.Cell className="space-x-3">
                                                        <Actions item={item}></Actions>
                                                    </Table.Cell>
                                                </Table.Row>)
                                            }
                                        </Table.Body>
                                    </Table.Content>
                                </Table.ScrollContainer>
                            </Table>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default RequestListingModal;

