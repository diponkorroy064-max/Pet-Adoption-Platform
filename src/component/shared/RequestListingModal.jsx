import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Table } from "@heroui/react";


const RequestListingModal = () => {
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
                                            <Table.Column isRowHeader>Name</Table.Column>
                                            <Table.Column>Role</Table.Column>
                                            <Table.Column>Status</Table.Column>
                                            <Table.Column>Email</Table.Column>
                                        </Table.Header>

                                        <Table.Body>
                                           
                                            <Table.Row>
                                                <Table.Cell>John Smith</Table.Cell>
                                                <Table.Cell>CTO</Table.Cell>
                                                <Table.Cell>Active</Table.Cell>
                                                <Table.Cell>john@acme.com</Table.Cell>
                                            </Table.Row>
                                           
                                           

                                        </Table.Body>
                                    </Table.Content>
                                </Table.ScrollContainer>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                           
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default RequestListingModal;

