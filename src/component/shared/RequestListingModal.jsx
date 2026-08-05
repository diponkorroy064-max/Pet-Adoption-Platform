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
    console.log("req data", reqData);


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
                            <Modal.Heading>Adoption request in your list</Modal.Heading>
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
                                            {reqData.length === 0 ? (
                                                <Table.Row>
                                                    <Table.Cell colSpan={3}>
                                                        <p className="py-6 text-center text-red-400 font-medium">
                                                            There is no request yet
                                                        </p>
                                                    </Table.Cell>
                                                </Table.Row>
                                            ) : (
                                                reqData.map((item) => (
                                                    <Table.Row
                                                        key={item._id}
                                                        className="hover:bg-muted/40 transition-colors">
                                                       
                                                        <Table.Cell>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">
                                                                    {item?.user}
                                                                </span>

                                                                <span className="text-sm text-muted-foreground">
                                                                    {item?.email}
                                                                </span>
                                                            </div>
                                                        </Table.Cell>

                                                        <Table.Cell>
                                                            <span className="text-sm">
                                                                {item?.date}
                                                            </span>
                                                        </Table.Cell>

                                                        <Table.Cell>
                                                            <div className="flex items-center gap-2">
                                                                <Actions item={item} />
                                                            </div>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))
                                            )}
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

