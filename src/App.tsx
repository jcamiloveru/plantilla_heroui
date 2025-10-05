import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@heroui/react';
import { useTheme } from '@heroui/use-theme';

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="">
        <Card className="h-124 w-124">
          <CardHeader className="flex-col justify-center gap-2">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button color="primary">Open Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="item-1">Item 1</DropdownItem>
                <DropdownItem
                  key="theme"
                  onPress={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                  }}
                >
                  Change theme: {theme === 'dark' ? 'light' : 'dark'}
                </DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardHeader>

          <CardBody className="grid grid-cols-5 content-center justify-items-center">
            <div className="bg-primary size-16 rounded-md" />
            <div className="bg-secondary size-16 rounded-md" />
            <div className="bg-success size-16 rounded-md" />
            <div className="bg-warning size-16 rounded-md" />
            <div className="bg-danger size-16 rounded-md" />
          </CardBody>

          <CardFooter className="justify-center">¡Footer!</CardFooter>
        </Card>
      </div>
    </div>
  );
}
